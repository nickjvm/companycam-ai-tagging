import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function Autocomplete({
  value,
  options,
  onChange,
  placeholder,
}: Props) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setHighlightedIndex(-1);
    setShowDropdown(filtered.length > 0);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      onChange(filteredOptions[highlightedIndex]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setShowDropdown(false);
  };

  const handleFocus = () => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setShowDropdown(filtered.length > 0);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <input
        placeholder={placeholder}
        type="search"
        className="w-full p-2 border rounded"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      {showDropdown && (
        <ul className="z-10 absolute left-0 w-full bg-white border rounded shadow-md max-h-40 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              className={`p-2 cursor-pointer ${
                index === highlightedIndex ? "bg-gray-200" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
