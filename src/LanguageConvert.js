import React from "react";
import { LanguageData } from "./LanguageData";
function LanguageConvert({ label, onChange }) {
  return (
    <div>
      <label htmlFor={label} className="text-xl font-medium">
        {label}
      </label>
      <select
        name=""
        id={label}
        className="border border-slate-500 bg-slate-200"
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.entries(LanguageData).map(([language, languageCode]) => {
          return (
            <option value={languageCode} key={languageCode}>
              {language}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LanguageConvert;
