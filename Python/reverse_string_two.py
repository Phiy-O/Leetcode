# Reverse String II - Easy
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        separate_char = [s[x:x+k] for x in range(0, len(s), k)]
        reverse_char = [y[::-1] for y in separate_char]
        
        for x in range(0, len(separate_char), 2):
            separate_char[x] = reverse_char[x]
        return ''.join(separate_char)
            
