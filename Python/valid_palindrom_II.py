# Valid Palindrom II - Easy
class Solution:
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1

        def check_sub_palindrom(s, l, r):
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True

        while left <= right:
            if s[left] != s[right]:
                if check_sub_palindrom(s, left + 1, right):
                    return True
                
                if check_sub_palindrom(s, left, right - 1):
                    return True
                return False
            left += 1
            right -= 1
        return True
