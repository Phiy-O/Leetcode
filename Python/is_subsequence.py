# Is Subsequence - Easy
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_arr = list(s)
        t_arr = list(t)
        temp_string = ""
        i = 0

        for x in range(0, len(t)):
            if len(s) != 0:
                if temp_string == s:
                    return True
                elif t_arr[x] == s_arr[i]:
                    i += 1
                    temp_string += t_arr[x]
                else:
                    continue
            else:
                return True
        return temp_string == s
        
