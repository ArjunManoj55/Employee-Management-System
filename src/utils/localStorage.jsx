const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        title: "Submit Report",
        description: "Prepare and submit the monthly report",
        date: "2025-05-12",
        category: "Reporting",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        title: "Fix Bug #432",
        description: "Resolve login issue for client portal",
        date: "2025-05-10",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        title: "Update Documentation",
        description: "Revise onboarding docs for new hires",
        date: "2025-05-08",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        title: "Design New Logo",
        description: "Create initial concepts for rebranding",
        date: "2025-05-13",
        category: "Design",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

//  Set localStorag
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees)); // fixed typo
  localStorage.setItem("admins", JSON.stringify(admins));
};

//  Get localStorage 
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admins = JSON.parse(localStorage.getItem("admins")) || [];

  return { employees, admins };
};
