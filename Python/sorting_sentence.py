# [ Easy ] Sorting the Sentence
class Solution:
    def sortSentence(self, s: str) -> str:
        x = sorted(s[::-1].split())
        result = ''
        for i in x:
            result += f" {(i[::-1])}"
            
        for digit in '0123456789':
            result = result.replace(digit, "")
        return result.strip()
