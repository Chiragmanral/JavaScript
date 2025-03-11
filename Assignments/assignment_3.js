function generateNestedStrings(n, count) {
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const results = [];
  
    for (let i = 0; i < count; i++) {
      let path = [];
      for (let j = 0; j < n; j++) {
        path.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      let value = Math.floor(Math.random() * 1000); // Random value
      results.push(`${path.join('.')} = ${value}`);
    }
  
    return results;
  }
  
  // Example: Generate 5 nested strings with 4 levels of nesting
  console.log(generateNestedStrings(1, 5));
  console.log(generateNestedStrings(2, 5));  
  console.log(generateNestedStrings(3, 5));
  console.log(generateNestedStrings(4, 5));
  console.log(generateNestedStrings(5, 5));

  
  