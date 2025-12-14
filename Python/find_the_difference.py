# Find the Difference - Easy
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        sumS = 0
        sumT = 0

        for x in s:
            sumS += ord(x)

        for y in t:
            sumT += ord(y)
        
        return chr(sumT - sumS)
