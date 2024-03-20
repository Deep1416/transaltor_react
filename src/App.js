import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import { useState } from "react";
import LanguageConvert from "./LanguageConvert";
function App() {
  const [source_language, setSource_language] = useState("");
  const [target_language, setTarget_language] = useState("");
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const dataAPi = async () => {

    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", source_language);
    encodedParams.set("target_language", target_language);
    encodedParams.set("text", textInput);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "9007abbd3emshec4506c43be6245p1e3eafjsn0e86dd3945b6",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      const finalData = response.data;
      console.log(finalData);

      if (finalData.status === "success") {
        const converteddata = JSON.parse(`"${finalData.data.translatedText}"`);
        setResult(converteddata);
        console.log(converteddata);
      } else {
        setResult("Translation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred during translation.");
    }
  };

  // const encodedParams = new URLSearchParams();
  // encodedParams.set("source_language", en);
  // encodedParams.set("target_language", id);
  // encodedParams.set("text", "What is your name?");

  // const options = {
  //   method: "POST",
  //   url: "https://text-translator2.p.rapidapi.com/translate",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Key": "9007abbd3emshec4506c43be6245p1e3eafjsn0e86dd3945b6",
  //     "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  //   },
  //   data: encodedParams,
  // };

  // async function dataPassed() {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // dataPassed();

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-8 mt-12 ">
        Language Translator
      </h1>
      <div className="text-center flex flex-col w-2/5 mx-auto gap-4  pt-6">
        <LanguageConvert
          label="SourceLanguage : "
          onChange={setSource_language}
        />
        <LanguageConvert
          label="TargetLanguage : "
          onChange={setTarget_language}
        />
        <p className="text-lg font-semibold"> Write Text </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-80 mx-auto border border-slate-800 px-2 bg-slate-200"
        >
          message
        </textarea>

        <button
          className="bg-blue-500 py-2 px-4 w-52 mx-auto font-semibold hover:bg-green-600 ease-linear"
          onClick={dataAPi}
        >
          Translate
        </button>
        <p className="text-green-600 pb-4">{result}</p>
      </div>
    </div>
  );
}

export default App;
