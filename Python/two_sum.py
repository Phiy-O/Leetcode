class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        arr = []
        for x in range(len(nums)):
            for y in range(x):
                if nums[x] + nums[y] == target:
                    arr.append(x)
                    arr.append(y)
        return arr
