
export const topics = [
    { name: "Arrays", slug: "arrays" },
    { name: "Strings", slug: "strings" },
    { name: "Bit Manipulation", slug: "bit-manipulation" },
    { name: "LinkedList", slug: "linkedlist" },
    { name: "Stacks", slug: "stacks" },
    { name: "Queues", slug: "queues" },
    { name: "Searching and Sorting", slug: "searching-and-sorting" },
    { name: "Recursion", slug: "recursion" },
    { name: "BackTracking", slug: "backtracking" },
    { name: "Trees", slug: "trees" },
    { name: "Dynamic Programming", slug: "dynamic-programming" }
];

export const questions = {
    // 1. ARRAYS: traversal -> manipulation -> patterns -> advanced
    arrays: [
        { name: "Largest Element", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1" },
        { name: "Second Largest Element", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/second-largest3735/1" },
        { name: "Check if Array Is Sorted", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1" },
        { name: "Reverse an Array", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/reverse-an-array/1" },
        { name: "Left Rotate Array by One", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/rotate-array-by-one-position-1587115621/1" },
        { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { name: "Move Zeroes", difficulty: "Easy", link: "https://leetcode.com/problems/move-zeroes/" },
        { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
        { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { name: "Maximum Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
        { name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
        { name: "Sort Colors", difficulty: "Medium", link: "https://leetcode.com/problems/sort-colors/" },
        { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
        { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
        { name: "Trapping Rain Water", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/" }
    ],

    // 2. STRINGS: basic operations -> frequency -> two pointers -> windows
    strings: [
        { name: "Reverse String", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-string/" },
        { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
        { name: "Find the Index of the First Occurrence", difficulty: "Easy", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
        { name: "Longest Common Prefix", difficulty: "Easy", link: "https://leetcode.com/problems/longest-common-prefix/" },
        { name: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
        { name: "Isomorphic Strings", difficulty: "Easy", link: "https://leetcode.com/problems/isomorphic-strings/" },
        { name: "Reverse Words in a String", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
        { name: "String Compression", difficulty: "Medium", link: "https://leetcode.com/problems/string-compression/" },
        { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { name: "Longest Repeating Character Replacement", difficulty: "Medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
        { name: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
        { name: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { name: "String to Integer (atoi)", difficulty: "Medium", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
        { name: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/" },
        { name: "Regular Expression Matching", difficulty: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" }
    ],

    // 3. BIT MANIPULATION: binary basics -> bit tricks -> advanced XOR
    "bit-manipulation": [
        { name: "Number of 1 Bits", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/" },
        { name: "Power of Two", difficulty: "Easy", link: "https://leetcode.com/problems/power-of-two/" },
        { name: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/" },
        { name: "Missing Number", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/" },
        { name: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/" },
        { name: "Reverse Bits", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-bits/" },
        { name: "Add Binary", difficulty: "Easy", link: "https://leetcode.com/problems/add-binary/" },
        { name: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" },
        { name: "Single Number II", difficulty: "Medium", link: "https://leetcode.com/problems/single-number-ii/" },
        { name: "Bitwise AND of Numbers Range", difficulty: "Medium", link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" },
        { name: "Gray Code", difficulty: "Medium", link: "https://leetcode.com/problems/gray-code/" },
        { name: "Divide Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/divide-two-integers/" },
        { name: "XOR Queries of a Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/xor-queries-of-a-subarray/" },
        { name: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
        { name: "Minimum Number of K Consecutive Bit Flips", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/" }
    ],

    // 4. LINKED LIST: traversal -> pointers -> reversal -> advanced
    linkedlist: [
        { name: "Design Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/design-linked-list/" },
        { name: "Middle of the Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { name: "Remove Duplicates from Sorted List", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
        { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { name: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { name: "Intersection of Two Linked Lists", difficulty: "Easy", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        { name: "Palindrome Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        { name: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
        { name: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/" },
        { name: "Swap Nodes in Pairs", difficulty: "Medium", link: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
        { name: "Rotate List", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-list/" },
        { name: "Copy List with Random Pointer", difficulty: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
        { name: "Reverse Nodes in k-Group", difficulty: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
    ],

    // 5. STACKS: stack basics -> monotonic stack -> advanced
    stacks: [
        { name: "Implement Stack Using Queues", difficulty: "Easy", link: "https://leetcode.com/problems/implement-stack-using-queues/" },
        { name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
        { name: "Baseball Game", difficulty: "Easy", link: "https://leetcode.com/problems/baseball-game/" },
        { name: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/" },
        { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
        { name: "Next Greater Element I", difficulty: "Easy", link: "https://leetcode.com/problems/next-greater-element-i/" },
        { name: "Daily Temperatures", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
        { name: "Next Greater Element II", difficulty: "Medium", link: "https://leetcode.com/problems/next-greater-element-ii/" },
        { name: "Asteroid Collision", difficulty: "Medium", link: "https://leetcode.com/problems/asteroid-collision/" },
        { name: "Decode String", difficulty: "Medium", link: "https://leetcode.com/problems/decode-string/" },
        { name: "Simplify Path", difficulty: "Medium", link: "https://leetcode.com/problems/simplify-path/" },
        { name: "Remove K Digits", difficulty: "Medium", link: "https://leetcode.com/problems/remove-k-digits/" },
        { name: "Online Stock Span", difficulty: "Medium", link: "https://leetcode.com/problems/online-stock-span/" },
        { name: "Largest Rectangle in Histogram", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { name: "Basic Calculator", difficulty: "Hard", link: "https://leetcode.com/problems/basic-calculator/" }
    ],

    // 6. QUEUES: FIFO -> circular queue -> BFS -> advanced
    queues: [
        { name: "Number of Recent Calls", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-recent-calls/" },
        { name: "Implement Queue Using Stacks", difficulty: "Easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
        { name: "Time Needed to Buy Tickets", difficulty: "Easy", link: "https://leetcode.com/problems/time-needed-to-buy-tickets/" },
        { name: "Design Circular Queue", difficulty: "Medium", link: "https://leetcode.com/problems/design-circular-queue/" },
        { name: "Reveal Cards In Increasing Order", difficulty: "Medium", link: "https://leetcode.com/problems/reveal-cards-in-increasing-order/" },
        { name: "Dota2 Senate", difficulty: "Medium", link: "https://leetcode.com/problems/dota2-senate/" },
        { name: "Rotting Oranges", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
        { name: "01 Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/01-matrix/" },
        { name: "Open the Lock", difficulty: "Medium", link: "https://leetcode.com/problems/open-the-lock/" },
        { name: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
        { name: "Shortest Path in Binary Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
        { name: "Design Front Middle Back Queue", difficulty: "Medium", link: "https://leetcode.com/problems/design-front-middle-back-queue/" },
        { name: "Sliding Window Maximum", difficulty: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        { name: "Shortest Path to Get All Keys", difficulty: "Hard", link: "https://leetcode.com/problems/shortest-path-to-get-all-keys/" },
        { name: "Bus Routes", difficulty: "Hard", link: "https://leetcode.com/problems/bus-routes/" }
    ],

    // 7. SEARCHING AND SORTING: linear -> binary -> modified binary search
    "searching-and-sorting": [
        { name: "Linear Search", difficulty: "Easy", link: "https://www.geeksforgeeks.org/linear-search/" },
        { name: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/" },
        { name: "Search Insert Position", difficulty: "Easy", link: "https://leetcode.com/problems/search-insert-position/" },
        { name: "Sqrt(x)", difficulty: "Easy", link: "https://leetcode.com/problems/sqrtx/" },
        { name: "Merge Sorted Array", difficulty: "Easy", link: "https://leetcode.com/problems/merge-sorted-array/" },
        { name: "First Bad Version", difficulty: "Easy", link: "https://leetcode.com/problems/first-bad-version/" },
        { name: "Find First and Last Position", difficulty: "Medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
        { name: "Search a 2D Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { name: "Find Peak Element", difficulty: "Medium", link: "https://leetcode.com/problems/find-peak-element/" },
        { name: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        { name: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/" },
        { name: "Capacity To Ship Packages Within D Days", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
        { name: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { name: "Find in Mountain Array", difficulty: "Hard", link: "https://leetcode.com/problems/find-in-mountain-array/" }
    ],

    // 8. RECURSION: base cases -> recursive choices -> divide and conquer
    recursion: [
        { name: "Fibonacci Number", difficulty: "Easy", link: "https://leetcode.com/problems/fibonacci-number/" },
        { name: "Power of Three", difficulty: "Easy", link: "https://leetcode.com/problems/power-of-three/" },
        { name: "Reverse String", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-string/" },
        { name: "Pow(x, n)", difficulty: "Medium", link: "https://leetcode.com/problems/powx-n/" },
        { name: "K-th Symbol in Grammar", difficulty: "Medium", link: "https://leetcode.com/problems/k-th-symbol-in-grammar/" },
        { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { name: "Generate Parentheses", difficulty: "Medium", link: "https://leetcode.com/problems/generate-parentheses/" },
        { name: "Different Ways to Add Parentheses", difficulty: "Medium", link: "https://leetcode.com/problems/different-ways-to-add-parentheses/" },
        { name: "Sort an Array", difficulty: "Medium", link: "https://leetcode.com/problems/sort-an-array/" },
        { name: "Predict the Winner", difficulty: "Medium", link: "https://leetcode.com/problems/predict-the-winner/" },
        { name: "Beautiful Arrangement", difficulty: "Medium", link: "https://leetcode.com/problems/beautiful-arrangement/" },
        { name: "Count Good Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/count-good-numbers/" },
        { name: "Construct Lexicographically Largest Valid Sequence", difficulty: "Medium", link: "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/" },
        { name: "N-Queens", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/" },
        { name: "Sudoku Solver", difficulty: "Hard", link: "https://leetcode.com/problems/sudoku-solver/" }
    ],

    // 9. BACKTRACKING: subsets -> permutations -> combinations -> constraints
    backtracking: [
        { name: "Subsets", difficulty: "Medium", link: "https://leetcode.com/problems/subsets/" },
        { name: "Combinations", difficulty: "Medium", link: "https://leetcode.com/problems/combinations/" },
        { name: "Permutations", difficulty: "Medium", link: "https://leetcode.com/problems/permutations/" },
        { name: "Letter Combinations of a Phone Number", difficulty: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
        { name: "Combination Sum", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
        { name: "Combination Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/" },
        { name: "Subsets II", difficulty: "Medium", link: "https://leetcode.com/problems/subsets-ii/" },
        { name: "Palindrome Partitioning", difficulty: "Medium", link: "https://leetcode.com/problems/palindrome-partitioning/" },
        { name: "Word Search", difficulty: "Medium", link: "https://leetcode.com/problems/word-search/" },
        { name: "Restore IP Addresses", difficulty: "Medium", link: "https://leetcode.com/problems/restore-ip-addresses/" },
        { name: "Beautiful Arrangement", difficulty: "Medium", link: "https://leetcode.com/problems/beautiful-arrangement/" },
        { name: "Matchsticks to Square", difficulty: "Medium", link: "https://leetcode.com/problems/matchsticks-to-square/" },
        { name: "Combination Sum III", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-iii/" },
        { name: "N-Queens", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/" },
        { name: "Sudoku Solver", difficulty: "Hard", link: "https://leetcode.com/problems/sudoku-solver/" }
    ],

    // 10. TREES: basic properties -> DFS -> BFS -> BST -> advanced
    trees: [
        { name: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { name: "Same Tree", difficulty: "Easy", link: "https://leetcode.com/problems/same-tree/" },
        { name: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
        { name: "Symmetric Tree", difficulty: "Easy", link: "https://leetcode.com/problems/symmetric-tree/" },
        { name: "Path Sum", difficulty: "Easy", link: "https://leetcode.com/problems/path-sum/" },
        { name: "Binary Tree Inorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
        { name: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { name: "Validate Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { name: "Kth Smallest Element in a BST", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        { name: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        { name: "Binary Tree Right Side View", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
        { name: "Construct Binary Tree from Preorder and Inorder", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        { name: "Flatten Binary Tree to Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
        { name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
    ],

    // 11. DYNAMIC PROGRAMMING: 1D -> decisions -> subsequences -> advanced
    "dynamic-programming": [
        { name: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
        { name: "Min Cost Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        { name: "Fibonacci Number", difficulty: "Easy", link: "https://leetcode.com/problems/fibonacci-number/" },
        { name: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/" },
        { name: "House Robber II", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-ii/" },
        { name: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
        { name: "Minimum Path Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-path-sum/" },
        { name: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/" },
        { name: "Decode Ways", difficulty: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
        { name: "Word Break", difficulty: "Medium", link: "https://leetcode.com/problems/word-break/" },
        { name: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { name: "Partition Equal Subset Sum", difficulty: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        { name: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
        { name: "Edit Distance", difficulty: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
        { name: "Burst Balloons", difficulty: "Hard", link: "https://leetcode.com/problems/burst-balloons/" }
    ]
};
