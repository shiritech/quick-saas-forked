export type checkType = {
    id: string;
    label: string;
    prompt: string;
}

type checksPromptType = checkType[];

const instruction = "I will give a coding script. Give clean coding suggestions in order of the following topics."
                + "and for each topic, come up with a grading score between 1 and 3."
                + "if the code do not need any clean coding enhancement and suggestions, give 3."
                + "If partially good give 2. if it needs a lot of enhancement give 1."
                + "Give score to each topic separately regarding that topic."
                + "If you give 1 or 2 as the score, you need to come up with one or two suggestions how to enhance the code with that regard."
                + "Output must be in Json format with this structure:"

const prompt1 = instruction
                + "{Rubbish Code: {general analysis, suggestion1, suggestoin2, score}, Meaningful Naming: {genenral analysis, suggestion1, suggestoin2, score}}"
                + "Here are the topics:"
                + "\n 1- Rubbish Code: if there are some bad code or rubbish code or non-code lines, give suggteions to fix them."
                + "\n 2- Meaningful Naming: if there are some bad naming for funcitons, clasess or variables, or other things, give your suggestions."

const prompt2 = instruction
                + "{Single Responsibility Principle: {general analysis, suggestion1, suggestoin2, score}, DRY principle: {genenral analysis, suggestion1, suggestoin2, score}}"
                + "Here are the topics:"
                + "\n 1- Single Responsibility Principle: Each function or class should have only one responsibility or reason to change."
                + "\n 2- DRY principle: Don't repeat yourself principle. Avoid code duplication by abstracting common functionality into shared fucntions or classes."

export function allPrompts () {
    const prompt: checksPromptType = [
        {id: "first_task", label: "Readability", prompt: prompt1},
        {id: "second_task", label: "Simplicity", prompt: prompt2},
    ]

    return prompt;
}


export function checksCount() {
    return allPrompts().length;
}

export function getCheckLabel(part: number) {
    return allPrompts()[part]['label'];
}

export function getCheckId(part: number) {
    return allPrompts()[part]['id'];
}