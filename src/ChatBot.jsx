import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"
import ChatBot from "react-chatbotify";


const MyChatBot = () => {
	let apiKey = "AIzaSyD-rwPq8xV2XktuVdDsFlhZC34T5GILr3s";
	const modelType = "gemini-1.5-flash";

	const gemini_stream = async (params) => {
		try {
			const genAI = new GoogleGenerativeAI(apiKey);
			const model = genAI.getGenerativeModel({ model: modelType });
			const result = await model.generateContentStream(params.userInput);

			let text = "";
			let offset = 0;
			for await (const chunk of result.stream) {
				const chunkText = chunk.text();
				text += chunkText;
				for (let i = offset; i < chunkText.length; i++) {
					await params.streamMessage(text.slice(0, i + 1));
					await new Promise(resolve => setTimeout(resolve, 30));
				}
				offset += chunkText.length;
			}

			for (let i = offset; i < text.length; i++) {
				await params.streamMessage(text.slice(0, i + 1));
				await new Promise(resolve => setTimeout(resolve, 30));
			}
			await params.streamMessage(text);
		} catch (error) {
			await params.injectMessage("Unable to load model, is your API Key valid?");
			hasError = true;
		}
	}
	const flow = {
		start: {
			message: "Ask me anything",
			path: "loop",
			isSensitive: false
		},
		loop: {
			message: async (params) => {
				await gemini_stream(params);
			},
			path: () => {
				return "loop"
			}
		}
	}

	const options = {
		isOpen: false,
		// ...other configurations
		theme: {
			primaryColor: 'red',
			secondaryColor: '#491d8d',
			fontFamily: 'Arial, sans-serif',

		},
		audio: {
			disabled: false,
		},
		headerStyle: {
			background: '#42b0c5',
			color: '#ffffff',
			padding: '10px',
			title: "chatbot",

		},
		chatWindowStyle: {
			backgroundColor: '#f2f2f2',
		},
		chatHistory: {
			storageKey: "example_real_time_stream"
		},
		botBubble: {
			simStream: false
		},
		header: {
			title: "CitySync"
		}
	};
	return (
		<ChatBot options={options} flow={flow} />
	);
};

export default MyChatBot