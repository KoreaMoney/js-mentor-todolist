let categories = [
  {
    title: "개인업무",
    img: "men.png",
  },
  {
    title: "업무",
    img: "briefcase.png",
  },
  {
    title: "쇼핑",
    img: "shopping.png",
  },
  {
    title: "코딩",
    img: "web-design.png",
  },
  {
    title: "건강",
    img: "healthcare.png",
  },
  {
    title: "운동",
    img: "dumbbell.png",
  },
  {
    title: "교육",
    img: "education.png",
  },
  {
    title: "재정",
    img: "saving.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "시장 가기",
    category: "쇼핑",
    completed: false,
  },
  {
    id: 2,
    task: "책 한 챕터 읽기",
    category: "개인업무",
    completed: false,
  },
  {
    id: 3,
    task: "회의를 위한 프레젠테이션 준비",
    category: "업무",
    completed: false,
  },
  {
    id: 4,
    task: "코딩 챌린지 완료하기",
    category: "코딩",
    completed: false,
  },
  {
    id: 5,
    task: "30분 산책하기",
    category: "건강",
    completed: false,
  },
  {
    id: 6,
    task: "20분 HIIT 운동하기",
    category: "운동",
    completed: false,
  },
  {
    id: 7,
    task: "온라인 교육 비디오 시청하기",
    category: "교육",
    completed: false,
  },
  {
    id: 8,
    task: "월간 예산 검토하기",
    category: "재정",
    completed: false,
  },
  {
    id: 9,
    task: "일주일치 식료품 구매하기",
    category: "쇼핑",
    completed: false,
  },
  {
    id: 10,
    task: "일기 쓰기",
    category: "개인업무",
    completed: false,
  },
  {
    id: 11,
    task: "후속 이메일 보내기",
    category: "업무",
    completed: false,
  },
  {
    id: 12,
    task: "코딩 사이드 프로젝트 작업하기",
    category: "코딩",
    completed: false,
  },
  {
    id: 13,
    task: "새로운 건강식 레시피 시도하기",
    category: "건강",
    completed: false,
  },
  {
    id: 14,
    task: "요가 수업 참석하기",
    category: "운동",
    completed: false,
  },
  {
    id: 15,
    task: "새로운 주제에 대한 기사 읽기",
    category: "교육",
    completed: false,
  },
  {
    id: 16,
    task: "자동 요금 지불 설정하기",
    category: "재정",
    completed: false,
  },
  {
    id: 17,
    task: "새 옷 구매하기",
    category: "쇼핑",
    completed: false,
  },
  {
    id: 18,
    task: "10분 명상하기",
    category: "개인업무",
    completed: false,
  },
  {
    id: 19,
    task: "팀 회의 의제 준비하기",
    category: "업무",
    completed: false,
  },
  {
    id: 20,
    task: "소프트웨어 문제 디버깅하기",
    category: "코딩",
    completed: false,
  },
  {
    id: 21,
    task: "점심으로 새로운 요리 시도하기",
    category: "건강",
    completed: false,
  },
  {
    id: 22,
    task: "달리기 가기",
    category: "운동",
    completed: false,
  },
  {
    id: 23,
    task: "온라인으로 새 언어 배우기",
    category: "교육",
    completed: false,
  },
  {
    id: 24,
    task: "역사에 대해 읽기",
    category: "교육",
    completed: false,
  },
  {
    id: 25,
    task: "투자 포트폴리오 검토하기",
    category: "재정",
    completed: false,
  },
];

// Define functions
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
};

const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
};

const updateTotals = () => {
  const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());
  numTasks.innerHTML = `등록된 일정 : ${categoryTasks.length}개`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    });

    div.innerHTML = `
                  <div class="left">
                <img src="images/${category.img}"
                 alt="${category.title}"
                  />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>일정 : ${categoryTasks.length} 개</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
    `;

    categoriesContainer.appendChild(div);
  });
};

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">등록된 일정이 없습니다.</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
      });
      div.innerHTML = `
      <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              `;
      label.innerHTML = `
              <span class="checkmark"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <p>${task.task}</p>
        `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });

    renderCategories();
    updateTotals();
  }
};

const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const category = categorySelect.value;

  if (task === "") {
    alert("일정을 등록해주세요.");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    taskInput.value = "";
    tasks.push(newTask);
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
};

// Initialize variables and DOM elements
let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");

// Attach event listeners
menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);

// Render initial state
getLocal();
renderTasks();
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});
