import React, { useState } from 'react'
import { Card } from './Card';
export const Cards = (props) => {
     let courses =props.courses;
     let category=props.category;
    
   const [likedCourses,setLikedCourses] =useState([]);
   function getCourses() {
    if (category === "All") {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            });
        });
        return allCourses;
    } else {
        // Assuming courses is an object with categories as keys
        // and arrays of courses as values.
        return courses[category] || [];
    }
}

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {getCourses().map((course)=>(
        <Card key={course.id} course={course} likedCourses={likedCourses}
         setLikedCourses={setLikedCourses}/>
    ))}
    </div>
  )
}
