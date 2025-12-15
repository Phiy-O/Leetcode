# Jewels and Stones - Easy
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        result = 0
        arr_jewels = list(jewels)
        for x in list(stones):
            if x in arr_jewels:
                result += 1
            continue
        return result
