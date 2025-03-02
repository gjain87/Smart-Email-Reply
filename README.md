# Automatic Email Reply Generator

This project is an automatic email reply generator built using Spring Boot, Gemini API, and React, with an accompanying Google Chrome extension.

## Overview

This application allows users to quickly generate relevant and personalized email replies using the power of the Gemini API. The backend, built with Spring Boot, handles the communication with the Gemini API and provides an API for the frontend. The React frontend provides a user-friendly interface for inputting email content and generating replies. A Google Chrome extension is also provided to streamline the process directly from your Gmail or other webmail interfaces.

## Features

* **Automatic Reply Generation:** Utilizes the Gemini API to generate intelligent and context-aware email replies.
* **Spring Boot Backend:** Provides a robust and scalable API for handling requests.
* **React Frontend:** Offers a clean and intuitive user interface.
* **Google Chrome Extension:** Integrates seamlessly with webmail services for quick reply generation.
* **Customizable Prompts (Optional):** Allows users to fine-tune the generated replies by providing custom prompts.

## Technologies Used

* **Backend:**
    * Spring Boot
    * Java
    * Gemini API (Google AI Studio or Vertex AI)
* **Frontend:**
    * React
    * JavaScript
    * CSS
* **Extension:**
    * Javascript
    * HTML
    * CSS

## Setup Instructions

### Backend Setup (Spring Boot)

  **Prerequisites:**
    * Java Development Kit (JDK) 17 or higher
    * Maven or Gradle
    * Google Cloud Platform (GCP) account with Gemini API enabled (Google AI Studio or Vertex AI).
    * Create a API key for Gemini API.


## Code Structure

* **Backend (Spring Boot):**
    * `src/main/java/com/email/writer`: Contains the Java source code for the backend.
        * `controller`: Handles API requests.
        * `service`: Contains business logic and interacts with the Gemini API.
        * `model`: Data models.
        * `config`: Configuration files.
* **Frontend (React):**
    * `src`: Contains the React source code.
        * `components`: Reusable UI components.
        * `App.js`: Main application component.
        * `config.js` or `.env`: Configuration files.
* **Extension:**
    * `manifest.json`: Defines the extension's metadata and permissions.
    * `popup.html`: The HTML structure of the extension's popup.
    * `popup.js`: The JavaScript logic for the extension.
    * `popup.css`: The CSS styling for the extension.

## API Endpoints

* `POST /api/email/generate`: Generates an email reply based on the provided email content.

## Future Enhancements

* **Integration with more email platforms.**
* **Improved prompt engineering for better reply generation.**
* **User authentication and personalization.**
* **Reply tone customization.**
* **Error Handling improvements.**
