package utils

import (
	"context"
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
		genai.Text("return all the text in this image"),
	}
	resp, err := model.GenerateContent(ctx, prompt...)

	if err != nil {
		return nil, err
	}

	return resp.Candidates[0].Content, nil
}
