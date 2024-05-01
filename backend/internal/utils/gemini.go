package utils

import (
	"context"
	"fmt"
	"os"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func ExtractTextFromImage(image []byte, format string) (*genai.Content, error) {
	ctx := context.Background()

	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("GEMINI_API_KEY")))
	if err != nil {
		return nil, err
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-pro-vision")
	prompt := []genai.Part{
		genai.ImageData(format, image),
		genai.Text("Return all the text in this image."),
	}

	resp, err := model.GenerateContent(ctx, prompt...)
	if err != nil {
		return nil, err
	}

	return resp.Candidates[0].Content, nil
}

func ConvertTextToLatex(input genai.Part) (*genai.Content, error) {
	ctx := context.Background()

	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("GEMINI_API_KEY")))
	if err != nil {
		return nil, err
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-pro")
	prompt := fmt.Sprintf("Generate notes for the below text in the format of latex code with no additional text and without being in a code block:\n%s", input)

	resp, err := model.GenerateContent(ctx, genai.Text(prompt))
	if err != nil {
		return nil, err
	}

	return resp.Candidates[0].Content, nil
}
