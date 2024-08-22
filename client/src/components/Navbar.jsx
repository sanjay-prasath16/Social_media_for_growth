import { useState, useEffect } from "react";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    // Load recent searches from local storage when the component mounts
    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(storedSearches);
    }, []);

    // Function to handle storing recent searches
    const handleSearch = () => {
        if (query.trim() !== "") {
            const updatedSearches = [query, ...recentSearches.filter((item) => item !== query)].slice(0, 2);
            setRecentSearches(updatedSearches);
            localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
        }
    };

    // Handle input changes and search
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setIsTyping(true);
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
            setQuery(""); // Clear the input after storing the search
        }
    };

    // Show recent searches when clicking on the search bar if no query
    const handleFocus = () => {
        if (!query) {
            setResults(recentSearches);
            setIsTyping(true);
        }
    };

    // Handle clicking outside the search box to reset the background and close suggestions
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.tagName !== "INPUT") {
                setIsTyping(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative min-h-screen ${isTyping ? "bg-gray-900 bg-opacity-50" : "bg-white"}`}>
            {/* Search Input */}
            <div className="flex justify-center pt-10">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Listen for Enter key
                    onFocus={handleFocus}
                    className="border rounded-md p-2 w-80 search text-black outline-none"
                />
            </div>
            {isTyping && results.length > 0 && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-4 w-80 z-10">
                    {results.map((item, index) => (
                        <div key={index} className="p-2 border-b border-gray-200">
                            <h3 className="font-semibold">{item}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;