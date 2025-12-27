let arr = [10, 20, 30];

try {
    if (arr[5] === undefined) {
        throw new Error();
    }
    console.log(arr[5]);
} catch {
    console.log("Such index doesn’t exist");
}
