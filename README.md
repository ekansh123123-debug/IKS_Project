# Pingala Prism 🕉️
> **Chandas meets binary buddhi.** Where Sanskrit chandas becomes digital logic.

Pingala Prism is an interactive Indian Knowledge Systems (IKS) web application that explores the deep connection between Acharya Pingala’s ancient Sanskrit prosody (*Chanda Shastra*) and modern binary computing. Long before the creation of modern electronic computers, Pingala developed a two-symbol pattern logic using **Laghu (।) = 0** and **Guru (ऽ) = 1** to analyze and organize poetic rhythm. This platform serves as a modern bridge connecting ancient Bharatiya ganita (mathematics) and digital computation.

🌐 **Live Demo:** [https://ekansh123123-debug.github.io/IKS_Project/](https://ekansh123123-debug.github.io/IKS_Project/)

---

## 🚀 Key Features

### 1. ◐ Binary Explorer
* Maps traditional Sanskrit prosody symbols directly to modern binary digits.
* **Dual Conversion:** Convert standard Laghu/Guru inputs (`L`/`G` or `।`/`ऽ`) to binary strings (`0`/`1`) and vice versa.
* Includes a quick pattern reference table to visually demonstrate how two-state logic encodes data.

### 2. 🔢 Word & Number Converter
* Input decimal integers or Sanskrit text (e.g., *Rama*, *पिंगल*) to see how they resolve into raw binary.
* Translates modern binary strings into their corresponding Pingala-style **Laghu-Guru** and phonetic expressions, establishing a clear link to ancient data encoding.

### 3. 📝 Shloka Lab / Analyzer
* Paste a full Sanskrit shloka, half-verse, or isolated word to test its metrics.
* **Rule Engine:** Programmatically analyzes characters line by line using traditional *Chandas* rules:
  * Short vowels $\rightarrow$ **Laghu**
  * Long vowels $\rightarrow$ **Guru**
  * Influence of *Anusvara* or *Visarga* $\rightarrow$ **Guru**
  * Consonant clusters following a short vowel $\rightarrow$ **Guru**

### 4. 🔺 Meru Prastara (Combinatorics Explorer)
* Explores Pingala’s combinational counting method ($2^n$ possibilities for $n$ syllables).
* Demonstrates the structural and recursive properties of the **Meru Prastara**—the historical precursor to Pascal’s Triangle—showing how rows sum and compound to govern syllabic distribution.

---

## 🛠️ Built With

* **HTML5** – Semantic structures for interactive layouts.
* **CSS3** – Fully responsive, theme-aware layout suited for educational dashboards.
* **JavaScript (ES6+)** – Text parsing engines, regex-based Sanskrit syllable tokenization, and mathematical combinatorics utilities.

---

## 📖 Historical Context & Significance

* **Acharya Pingala (~200 BCE):** Author of the *Chanda Shastra*, the earliest known text dealing with Sanskrit poetic meters.
* **Two-State Logic:** By choosing a binary categorization system (Laghu/Light vs. Guru/Heavy), Pingala laid down the foundational mathematical architecture that underlies combinatorial mathematics and computer data storage today.
* **Meru Prastara:** Literally meaning "Staircase of Mount Meru," this ancient structure maps out binomial coefficients long before Western mathematicians formalized modern combinations.

---

## 💻 Local Setup & Development

To run this repository locally on your machine, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/ekansh123123-debug/IKS_Project.git](https://github.com/ekansh123123-debug/IKS_Project.git)
