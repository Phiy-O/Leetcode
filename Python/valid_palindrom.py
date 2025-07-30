class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s == ' ':
            return True
        
        text = s.lower().replace(' ', '')
        result = ''
        for x in text:
            if x.isalnum():
                result += x
        
        return result == result[::-1]
