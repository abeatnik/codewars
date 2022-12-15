//my solution for Create Phone Number : https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript (6kyu)

function createPhoneNumber(numbers) {
    const valid =
        numbers.length === 10 && numbers.every((num) => num >= 0 && num < 10);
    if (valid) {
        const template = numbers.map((num) => num.toString());
        return `(${template.slice(0, 3).join("")}) ${template
            .slice(3, 6)
            .join("")}-${template.slice(6).join("")}`;
    }
}
