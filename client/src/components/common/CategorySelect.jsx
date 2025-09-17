import React from 'react'

export default function CategorySelect({onChange , value}) {
  return (
                <div>
                  <label className="block mb-1 text-sm font-medium">Category</label>
                  <select
                    value={value}
                    onChange={onChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Business">Business</option>
                  </select>
                </div>

  )
}
