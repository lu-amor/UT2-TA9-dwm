function getOdds(nums) {
    const oddNumbers = nums.filter(nums => nums % 2 != 0);
    console.log(oddNumbers);
}