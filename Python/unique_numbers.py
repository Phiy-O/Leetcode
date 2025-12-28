# 1207. Unique Number of Occurrences - Easy
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        temp_dict = {}
        temp_set = set()

        for x in arr:
            temp_dict[x] = arr.count(x)
        
        temp_arr = []
        for y in temp_dict.values():
            temp_arr.append(y)
            
        for z in temp_arr:
            if z in temp_set:
                break
            temp_set.add(z)
        return len(temp_arr) == len(temp_set)
