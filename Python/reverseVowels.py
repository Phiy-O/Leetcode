# 345. Reverse Vowels of a String
class Solution:
    def reverseVowels(self, s: str) -> str:
        vow_arr = []
        s = list(s)
        for x in s:
            if x.lower() in 'aiueo':
                vow_arr.append(x)
        
        reverse_arr = vow_arr[::-1]
        index = 0
        for i in range(len(s)):
            if s[i].lower() in 'aiueo':
                s[i] = reverse_arr[index]
                index += 1
        return ''.join(s)    
