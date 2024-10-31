# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


$$
T(n) = 
\begin{cases} 
\(1) & \text{if } n \le 1, \\
3T\left(\frac{n}{3}\right) + (n) + O(1) & \text{if } n > 1
\end{cases}
$$

We can solve this with expansion:

$$3T\left(\frac{n}{3}\right) + (n) + O(1)$$

$$9T\left(\frac{n}{9}\right) + (2n) + O(2)$$

$$27T\left(\frac{n}{27}\right) + (3n) + O(3)$$

By this we can see that the pattern that persist is: 

$$3^kT\left(\frac{n}{3^k}\right) + (k * n) + O(k)$$

We know that it takes $log_{3}(n)$ reccursions to get to a point where $n/3^k < 1$, so we can denote $k$ as $log_{3}(n)$, giving us:

$$3^{\log_{3}(n)}T\left(\frac{n}{3^{\log_{3}(n)}}\right) + (log_{3}(n) * n) + O(log_{3}(n))$$

We also know that $T\left(\frac{n}{3^{\log_{3}(n)}}\right) = 1$, and $3^{log_{3}(n)} = n$ so we can rewrite the relation as such: 

$$n * 1 + (log_{3}(n) * n) + O(log_{3}(n)$$


We can ignore the lower order term of $n * 1$, as well as O(log_{3}(n))

Thus the time colmplexity of this implementation is $\Theta(n log n)$

Help: ChatGPT helped refresh my markdown formatting, and help from my roomate on how expansion works when solving a reccurence relation.


“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
