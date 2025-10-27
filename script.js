let books = [];
let editId = null;

const bookForm = document.getElementById("bookForm");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookList = document.getElementById("bookList");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Yangi kitob qo'shish yoki tahrirlash
bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();

    if (!title || !author) return alert("❌ Iltimos, barcha maydonlarni to'ldiring!");

    if (editId) {
        // Yangilash
        const book = books.find(b => b.id === editId);
        book.title = title;
        book.author = author;
        editId = null;
        addBtn.textContent = "➕ Qo'shish";
        cancelBtn.style.display = "none";
        alert("✅ Kitob ma'lumotlari yangilandi!");
    } else {
        // Qo'shish
        books.push({ id: Date.now(), title, author });
        alert("✅ Yangi kitob qo'shildi!");
    }

    saveBooks();
    displayBooks();
    bookForm.reset();
});

// Kitoblarni chiqarish
function displayBooks() {
    bookList.innerHTML = "";
    if (books.length === 0) {
        bookList.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;">📭 Ro'yxat bo'sh</td></tr>`;
        return;
    }

    books.forEach((book, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button class="edit" onclick="editBook(${book.id})">✏️</button>
        <button class="delete" onclick="deleteBook(${book.id})">🗑️</button>
      </td>
    `;
        bookList.appendChild(row);
    });
}

// Tahrirlash
function editBook(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    bookTitle.value = book.title;
    bookAuthor.value = book.author;
    editId = id;
    addBtn.textContent = "💾 Saqlash";
    cancelBtn.style.display = "inline-block";
}

// Bekor qilish
cancelBtn.addEventListener("click", () => {
    editId = null;
    bookForm.reset();
    addBtn.textContent = "➕ Qo'shish";
    cancelBtn.style.display = "none";
});

// O'chirish
function deleteBook(id) {
    if (confirm("❓ Ushbu kitobni o'chirishni xohlaysizmi?")) {
        books = books.filter(b => b.id !== id);
        saveBooks();
        displayBooks();
        alert("🗑️ Kitob o'chirildi!");
    }
}

// LocalStorage bilan ishlash
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
    const data = localStorage.getItem("books");
    if (data) books = JSON.parse(data);
}

// Sahifa yuklanganda
window.addEventListener("DOMContentLoaded", () => {
    loadBooks();
    displayBooks();
});
