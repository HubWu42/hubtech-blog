// assets/js/custom-search.js

document.addEventListener('DOMContentLoaded', function() {
    // 打开弹窗
    var searchBtn = document.querySelector('.search-btn');
    var searchModal = document.getElementById('search-modal');
    var searchInput = document.querySelector('.search-modal-input');
    var searchBackdrop = document.querySelector('.search-modal-backdrop');
  
    if (searchBtn && searchModal && searchInput && searchBackdrop) {
      searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchModal.classList.add('show');
        setTimeout(function() {
          searchInput.focus();
        }, 100);
      });
  
      // 点击背景关闭弹窗
      searchBackdrop.addEventListener('click', function() {
        searchModal.classList.remove('show');
      });
  
      // 按 ESC 关闭弹窗
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          searchModal.classList.remove('show');
        }
      });
    }
  });