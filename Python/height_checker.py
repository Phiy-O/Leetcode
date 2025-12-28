# 1051. Height Checker - Easy
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        counter = 0
        sorted_array = sorted(heights)

        for x in range(0, len(heights)):
            if heights[x] != sorted_array[x]:
                counter += 1
            continue
        
        return counter
