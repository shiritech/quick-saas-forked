export function sampleResult () {
    return {
        "first_task": {
            "Rubbish Code": {
                "general analysis": "The code is generally clean, but there is potential for unnecessary usage of inline styles and repetitive class declarations.",
                "suggestion1": "Consider defining class names in a reusable way or using a CSS module to reduce inline styles.",
                "suggestion2": "If any links are placeholders, consider removing or replacing them with appropriate URLs.",
                "score": 2
            },
            "Meaningful Naming": {
                "general analysis": "The naming conventions are generally clear, but there could be improvements for clarity and consistency.",
                "suggestion1": "The component name 'Footer' is appropriate, but consider prefixing it with a more specific descriptor if it serves a unique purpose (e.g., 'MainFooter').",
                "suggestion2": "Ensure that filenames and exported component names match, which helps in identifying components easily in larger applications.",
                "score": 2
            },
            "label": "Readability"
        },
        "second_task": {
            "Single Responsibility Principle": {
                "general analysis": "The Footer component provides multiple responsibilities, such as rendering the logo, navigation links, and footer text. It could be split into smaller components such as Logo, NavLinks, and FooterText to adhere to the principle.",
                "suggestion1": "Refactor the Footer component into separate components (e.g., Logo, NavLinks, FooterText) to ensure that each component handles a single responsibility.",
                "suggestion2": "Consider using props to pass data to the newly created components, such as link labels and URLs, allowing for more reusable components.",
                "score": 1
            },
            "DRY principle": {
                "general analysis": "The navigation links are repeated multiple times within the Footer component. This violates the DRY principle. The same classes are used repeatedly, which can be refactored into a separate NavLinks component or utilized with a mapping function.",
                "suggestion1": "Create a separate NavLinks component that maps over an array of link objects to render the links dynamically, reducing duplication.",
                "suggestion2": "Define common class names in a variable or array to avoid repetition in the JSX code, ensuring cleaner syntax and easier changes.",
                "score": 1
            },
            "label": "Simplicity"
        }
    }
}