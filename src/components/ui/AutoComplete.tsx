import * as React from "react";

interface AutoCompleteProps {
  suggestions: string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  suggestions,
  placeholder = "Search...",
  value,
  onChange,
  disabled,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    string[]
  >([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Handle click outside to close suggestions
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle suggestion filtering
  React.useEffect(() => {
    if (value.trim() === "") {
      setFilteredSuggestions(suggestions.slice(0, 5));
    } else {
      const filtered = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
    // Reset active index when suggestions change
    setActiveIndex(-1);
  }, [value, suggestions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleFocus = () => {
    if (value.trim() === "") {
      setFilteredSuggestions(suggestions.slice(0, 5));
    }
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const nextIndex =
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev;
        return nextIndex;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const nextIndex = prev > 0 ? prev - 1 : -1;
        return nextIndex;
      });
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredSuggestions[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
        role="combobox"
        aria-expanded={isOpen}
        aria-autocomplete="list"
      />
      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-60"
          role="listbox"
        >
          {filteredSuggestions.map((item, index) => (
            <li
              key={item}
              className={`px-4 py-2 cursor-pointer ${
                index === activeIndex
                  ? "bg-gray-200 text-gray-900"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleSelect(item)}
              role="option"
              aria-selected={index === activeIndex}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
