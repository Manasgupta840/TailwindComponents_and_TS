import { useState } from 'react';

interface Film { title: string; year: number };

interface TitleAndYear {
    title: string;
    year: number;
}

type SelectProps<T extends TitleAndYear> = {
    options: T[];
    value: T;
    handleOptions: (option: T[]) => void;
    selectedItems: T[];
    onChange: (option: T) => void;
    handleItemSelection: (option: T) => void;
}

function Select<T extends TitleAndYear>({ options, handleOptions, selectedItems, onChange, handleItemSelection }: SelectProps<T>) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: T) => {
        handleOptions(options.filter((f) => f.title !== option.title))
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-auto flex-wrap bg-white border-2 border-gray-300 rounded-md px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-md flex items-center justify-between"
            > {selectedItems.length === 0 && (<span>Please select the Option</span>)}
                {selectedItems.map((film) => (

                    <span key={film.title} id="badge-dismiss-default" className=" top-0 mt-2  w-fit items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                        {film.title}
                        <button onClick={() =>
                            handleItemSelection(film)
                        } type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                ))}
                <svg
                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full bg-white border-2 border-gray-300 rounded-md mt-1 py-1 text-md">
                    {options.map((option: T) => (
                        <button
                            type="button"
                            key={option.title}
                            onClick={() => handleSelect(option)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                        >
                            <span>{option.title}</span>
                            <span className="text-gray-400 text-sm ml-2">({option.year})</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const top100Films: Film[] = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
];

export default function Tags() {
    const [selectedFilms, setSelectedFilms] = useState<Film[]>([]);
    const [options, setOptions] = useState<Film[]>(top100Films);
    const [value, setValue] = useState({ title: 'The Shawshank Redemption', year: 1994 });

    const handleSelect = (value: Film) => {
        console.log(value)
        setValue(value);
        setSelectedFilms([...selectedFilms, value])
    };
    const handleOptions = (option : Film[])=>{
        setOptions(option)
    }
    const handleFilmSelection = (film: Film) => {
        setSelectedFilms(selectedFilms.filter((f) => f.title !== film.title));
        setOptions([...options, film])

    };

    return (
        <div className="max-w-md mx-auto">
            <div className="relative">
                <div className="w-80">
                    <Select handleItemSelection={handleFilmSelection} options={options} selectedItems={selectedFilms} value={value} onChange={handleSelect} handleOptions={handleOptions}/>
                </div>
            </div>
        </div>
    );
}
