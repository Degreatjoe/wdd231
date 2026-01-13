const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];

const container = document.getElementById("courseContainer");
const totalCreditsEl = document.getElementById("totalCredits");
const buttons = document.querySelectorAll(".course-buttons button");

/* ===== DISPLAY COURSES ===== */
function displayCourses(courseList){
    container.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if(course.completed){
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        container.appendChild(card);
    });

    calculateCredits(courseList);
}

/* ===== REDUCE: TOTAL CREDITS ===== */
function calculateCredits(courseList){
    const total = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    totalCreditsEl.textContent = total;
}

/* ===== FILTER BUTTONS ===== */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if(filter === "all"){
            displayCourses(courses);
        } else {
            const filtered = courses.filter(course => course.subject === filter);
            displayCourses(filtered);
        }
    });
});

/* Initial display */
displayCourses(courses);
