async function delayedOutput(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        //   const number = numbers[i];
        //   const delay = number * 1000; // Convert delay to milliseconds

        await new Promise((resolve) => {
            setTimeout(resolve, numbers[i] * 1000)
        });


        console.log(`Output: ${numbers[i]}`);
    }
}

const numbers = [2, 4, 1, 3];
// delayedOutput(numbers);

