class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        arr = []
        for x in nums:
            x **= 2
            arr.append(x)
        return sorted(arr)
        
