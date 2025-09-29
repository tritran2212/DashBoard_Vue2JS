<template>
  <div class="dashboard">
   
    <div class="tasks">
      <div class="tasks-header">
        <div class="task_text">
            <h2>TASKS (5)</h2>
            <h3>Today</h3>
        </div>
        <PhGearSix :size="20" />
      </div>

      <SimpleBar class="scroll-container" data-simplebar>
        <ul class="task-list">
            <li v-for="(task, index) in tasks" :key="index" class="task-item">
            <div class="task-info">
                <input type="checkbox" v-model="task.done" />
                <div>
                <h3 :class="task.done ? 'done' : ''">{{ task.title }}</h3>
                <p>{{ task.desc }}</p>
                </div>
            </div>
            <button class="edit-btn" :title="dataEdit"><PhPen :size="20" /></button>
            </li>
        </ul>
     </SimpleBar>


  </div>
    <div class="management">
      <h2>Management table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>JOB POSITION</th>
            <th>SALARY</th>
            <th>MILESTONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td class="user-cell">
              <img :src="user.avatar" />
              {{ user.name }}
            </td>
            <td>{{ user.job }}</td>
            <td>
              <div class="progress-wrapper">
                <span>{{ user.salary }}%</span>
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: user.salary + '%' }"></div>
                </div>
              </div>
            </td>
            <td>€ {{ user.milestone }}</td>
            <td class="actions">
              <button class="refresh"><PhArrowClockwise :size="20" /></button>
              <button class="close"><PhX :size="20" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {PhPen,PhArrowClockwise,PhX,PhGearSix} from 'phosphor-vue';
import SimpleBar from 'simplebar-vue';

export default {
  name: "TaskList",
  components:{
    SimpleBar,
    PhPen,
    PhArrowClockwise,
    PhX,
    PhGearSix,
    
  },
  data() {
    return {
      tasks: [
        { title: "Update the Documentation", desc: "Duwamish Head, Seattle, WA 8:47 AM", done: false },
        { title: "GDPR Compliance", desc: "The GDPR is a regulation that requires ...", done: true },
        { title: "Solve the issues", desc: "Fifty percent of all respondents said ...", done: false },
        { title: "Release v2.0.0", desc: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM", done: false },
        { title: "Export the processed files", desc: "The report also shows that ...", done: false }
      ],
      users: [
        { name: "Tania Mike", job: "Develop", salary: 25, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=1" },
        { name: "John Doe", job: "CEO", salary: 77, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=2" },
        { name: "Alexa Mike", job: "Design", salary: 41, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=3" },
        { name: "Jana Monday", job: "Marketing", salary: 50, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=4" },
        { name: "Paul Dickens", job: "Develop", salary: 100, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=5" },
        { name: "Manuela Rico", job: "Manager", salary: 15, milestone: 99225, avatar: "https://i.pravatar.cc/40?img=6" }
      ],
      dataEdit:"Edit Task"
    };
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  background: #1a1a2e;
  height: auto;
  color: #fff;
 
}
.tasks{
  background: #2a2a40;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
}
.list-chart{
    display: flex;
}
.management {
  background: #2a2a40;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
}
.tasks {
  background: #2a2a40;
  padding: 20px;
  border-radius: 10px;
  flex-basis: 40%; 
}

.management {
  background: #2a2a40;
  padding: 20px;
  border-radius: 10px;
  flex-basis: 60% 
}
.tasks-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.task_text{display: flex;}
.tasks-header h2 {
    font-size: 12px;
    margin-right: 20px;
    font-weight: 400;
}
input[type="checkbox"] {
  accent-color: hotpink; 
  color:white;
}
.tasks-header h3 {
     font-size: 12px;
     color:#9a9a9a;
     font-weight: 100;
}
.task-list {
  list-style: none;
  padding: 0;
  width: 95%;
  margin-right: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #96AAAA;
  padding: 10px 0;
}

.task-info {
  display: flex;
  gap: 10px;
}

.task-info h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 100;
}

.task-info h3.done {
  text-decoration: line-through;
  color: #888;
}
.task-info p {
  margin: 0;
  font-size: 12px;
  color: #aaa;
}

.edit-btn {
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
}
.management h2{
    font-size: 14px;
    color:#9a9a9a;
    font-weight: 100;
}

.management table {
  width: 100%;
  border-collapse: collapse;
}

.management th{
    font-size: 12px;
    font-weight: 700;
}
.management td {
 
  text-align: left;
  font-size: 14px;
  /* border-top: 1px solid #9a9a9a; */
}
tbody tr{
  border-top: 1px solid #96AAAA;
}
.management thead {
  color: #aaa;
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-cell img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}


.progress-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar {
  background: #444;
  border-radius: 10px;
  width: 100px;
  height: 8px;
  overflow: hidden;
}

.progress-fill {
  background: #344675;
  height: 100%;
  border-radius: 10px;
}


.management .actions{ 
    display: flex;
    height:66px;
}
.actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.actions .refresh {
  color: #4caf50;
}

.actions .close {
  color: #f44336;
}
.scroll-container {
  max-height:400px;  
  overflow-x: hidden;
  padding-right: 5px; 
}

.scroll-container::-webkit-scrollbar {
  width: 10px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}
@media only screen and (width<= 576px)  {
 .dashboard{
  display: block;
 } 
 .tasks{
  margin-top: 20px;}
}
.management{
  margin-top: 20px;
}
@media only screen and (width >=577px) and (width<= 1023px){
 .dashboard{
  display: block;
 } 
 .tasks{
  margin-top: 20px;}
}
.management{
  margin-top: 20px;
}
@media only screen and (width>=1024px) {
 .dashboard{
  display: flex;
 } 
 .tasks{
  margin-top: 20px;}
}
.management{
  margin-top: 20px;
}
</style>
