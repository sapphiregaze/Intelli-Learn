# IntelliLearn: An AI-Powered Learning Assistant for Students

![banner](https://github.com/I2S9/Intelli-Learn/assets/111307883/aa133606-b202-4239-abaf-3c86096a0ecd)

## Introduction

IntelliLearn is a project submitted to the Google AI Hackathon, aimed at building a creative app that utilizes Google’s Generative AI tools to enhance the learning experience for students.

## Inspiration

The initial spark for IntelliLearn came from observing the struggles that students and educators faced during the COVID-19 pandemic with the transition to remote learning. Many students found it difficult to share and access high-quality notes in a uniform, readable format. Our aim was to create a solution that not only made it easier to digitize handwritten notes but also enhanced the learning experience through advanced technology.

## What it does

IntelliLearn transforms handwritten notes into highly organized, digital formats. Using state-of-the-art AI, specifically our Gemini AI model, it recognizes and learns individual handwriting styles for more accurate text conversion. Once notes are digitized, the app automatically converts them into formatted LaTeX documents, creates interactive flashcards, and generates audio summaries for auditory learning. It also includes features for organizing notes and sharing them as LaTeX files.

## How we built it

We built IntelliLearn by integrating various technologies. The handwriting recognition was developed using Gemini API on a diverse dataset of handwritten notes. For the LaTeX conversion, we utilized existing LaTeX libraries adapted to our specific requirements. The frontend was designed with a user-friendly interface in React, while the backend logic was handled by Node.js and MongoDB for data management.

## Challenges we ran into

One of the significant challenges was improving the accuracy of the handwriting recognition algorithm to handle diverse handwriting styles. Another challenge was ensuring the seamless integration of the LaTeX conversion, which required extensive testing and tweaking to handle various formatting challenges. Scalability and user data security were also key concerns that we addressed meticulously.

## Accomplishments that we're proud of

We are particularly proud of the robustness of our handwriting recognition technology, which has shown high accuracy levels across various user tests. The seamless conversion of handwritten notes to formatted LaTeX documents and the positive feedback from initial user trials also stand out as major accomplishments. Additionally, creating an intuitive user interface that simplifies the learning process was a significant achievement.

## What we learned

Throughout the development process, we learned a great deal about the complexities of machine learning in practical applications, especially in processing and interpreting handwritten text. We also gained insights into user experience design, ensuring that the app not only performs well but is also accessible and easy to use. The importance of data security and ethical considerations in AI were also crucial learning points.

## What's next for IntelliLearn

Looking ahead, we plan to expand IntelliLearn's capabilities by incorporating multilingual support to cater to a global user base. We also aim to enhance our AI model for even better accuracy and adaptability. Further integration with educational platforms and LMS tools is on the roadmap to make IntelliLearn a staple tool in educational environments. Additionally, exploring potential uses in professional settings for meeting notes and collaborative projects is also planned.
## Features 

* AI Model Personalized with OCR, Adaptive Handwriting Recognition

* Data Analysis for track your learning progression

* Intelligent Flashcard Generator based on pdf LaTeX document

* Summarize and listen your notes instantly

* Collaboration Mode and Easy Export and Sharing

## Tasks

- [x] Develop functionality to scan handwritten notes and convert them into LaTeX format.
- [x] Implement features to generate personalized quizzes based on scanned notes.
- [x] Organize notes and flashcards into categories corresponding to different courses.
- [x] Explore potential user analytics to identify areas of improvement and learning patterns (backlog).
- [x] Enable sharing of flashcards among users.
- [x] Implement a custom tutor option, allowing students to seek clarification on specific topics covered in their notes.
