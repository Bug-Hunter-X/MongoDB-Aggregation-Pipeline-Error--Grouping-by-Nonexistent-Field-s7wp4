```javascript
db.collection.aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: {
      _id: '$existingField',
      count: { $sum: 1 }
    }
  }
])
```