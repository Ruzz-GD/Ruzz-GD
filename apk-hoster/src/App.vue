<template>
  <div class="auth-page">
    <h1>Try This App</h1>
    <div class="code-master-container">
      <img src="./assets/images/code-master-logo.png" alt="Code Master App Logo" class="logo" />
      <h3>App Name: <span>Code Master</span></h3>
      <h3>Version: <span>1.0.0</span></h3>
      <h3>Release Date: <span>September 15, 2024</span></h3>
      <h3 v-if="downloadCount">Downloads: <span>{{ downloadCount }}</span></h3>
      <p class="app-description">
        Code Master is an interactive app designed to help users enhance their coding skills through a series of
        challenges and quizzes. Whether you're learning HTML, CSS, or JavaScript, Code Master provides real-time code
        validation and feedback to help you improve and master web development.
      </p>

      <button @click="startDownload" class="download-button">
        Download APK <span v-if="apkSize">({{ apkSize }})</span>
      </button>
      <p class="developer-info">Developed by: RUZZ-GD</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apkSize: null,
      downloadCount: 0 // State to hold the download count
    };
  },
  mounted() {
    this.fetchFileSize();
    this.fetchDownloadCount(); // Fetch the current download count on page load
  },
  methods: {
    async startDownload() {
      window.location.href = '/apk/CodeMaster-release-1.0.apk';
      try {
        // Make a POST request to Flask to increment the download count
        const response = await axios.post('https://codemaster2024.pythonanywhere.com/api/download');
        
        if (response.data.success) {
          this.downloadCount = response.data.downloadCount;
        }
      } catch (error) {
        console.error('Error incrementing download count:', error);
      }
    },
    async fetchFileSize() {
      try {
        const response = await fetch('/apk/CodeMaster-release-1.0.apk', { method: 'HEAD' });
        const size = response.headers.get('Content-Length');
        if (size) {
          this.apkSize = (size / (1024 * 1024)).toFixed(2) + ' MB';
        }
      } catch (error) {
        console.error('Error fetching APK size:', error);
      }
    },
    async fetchDownloadCount() {
      try {
        const response = await axios.get('https://codemaster2024.pythonanywhere.com/api/download-count');
        
        if (response.data.success) {
          this.downloadCount = response.data.downloadCount; 
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error fetching download count:', error);
      }
    }
  }
};
</script>
<style>
body {
  margin: 0;
}

.auth-page {
  flex-direction: column;
  text-align: center;
  padding: 50px 20px;
  height: calc(100vh - 100px);
  width: calc(100vw - 40px);
  display: flex;
  background-color: rgb(70, 70, 70);
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.auth-page h1 {
  color: white;
}

.logo {
  max-width: 50%;
  height: auto;
  border-radius: 20px;
}

.download-button {
  display: inline-block;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.download-button:hover {
  background-color: #0056b3;
}

.code-master-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(230, 230, 230);
  padding: 20px;
  gap: 5px;
  height: fit-content;
  width: calc(100% - 40px);
  max-width: 400px;
  align-items: flex-start;
  border-radius: 10px;
}

.app-description {
  width: 100%;
  text-align: left;
}

.code-master-container h3 {
  margin: 0;
  width: 100%;
  text-align: left;
}
</style>