
 # **Fullstack SMS Data Processing System Documentation** 
Assignment Title : MTN MoMo SMS Data Processing and Analytics Dashboard  
System Name: MoMo Transaction Insights  
Version: 1.0.0  
Date [Insert Date]  



 ## Table of Contents
1. [System Overview](#1-system-overview)  
2. [System Architecture](#2-system-architecture)  
3. [Key Features](#3-key-features)  
4. [Getting Started](#4-getting-started)  
5. [User Guide](#5-user-guide)  
6. [Administration](#6-administration)  
7. [Maintenance](#7-maintenance)  
8. [Troubleshooting](#8-troubleshooting)  
9. [Contact Information](#9-contact-information)  
10. [Appendix](#10-appendix)  

---

## 1. System Overview
### Purpose 
This system processes XML-formatted SMS data from MTN MoMo transactions, cleans and categorizes it into meaningful transaction types, stores it in a relational database, and provides an interactive dashboard for visualizing transaction trends and insights.  

### Scope
- Parse and clean XML data.  
- Categorize transactions into 10 predefined types (e.g., Incoming Money, Withdrawals, Airtime Payments).  
- Store data in a relational database.  
- Visualize transaction volume, monthly summaries, and payment distributions via a web-based dashboard.  

### Target Users
- End Users MTN analysts, business stakeholders.  
- Administrators: Developers maintaining the system.  

---

## 2. System Architecture 
### Components
- Frontend:  
  - Built with HTML, CSS, JavaScript (with charts using Chart.js/D3.js).  
  - Interactive dashboard for data visualization.  
- Backend:  
  - Python scripts for XML parsing, data cleaning, and database insertion.  
  - Optional Flask API to serve data to the frontend.  
- Database:  
  - Relational database (SQLite or PostgreSQL] with tables for transactions, categories, and logs.  
- Infrastructure.  
  - Local development environment or cloud deployment (e.g., AWS EC2).  

### Architecture Diagram  
```plaintext
[XML File] → [Python Data Processor] → [Relational Database]  
                    ↑  
[Flask API (Optional)] ↔ [Frontend Dashboard]  
```

---

## 3. Key Features
### Backend Features 
1. XML Data Extraction:  
   - Parse XML files using `xml.etree.ElementTree` or `BeautifulSoup`.  
2. Data Cleaning:  
   - Normalize amounts (e.g., RWF 1,000 → 1000).  
   - Handle missing fields (default values/error logs).  
3. Categorization:  
   - Map SMS messages to 10 transaction types (e.g., "Received money" → "Incoming Money").  
4. Database Integration:  
   - SQL scripts for schema creation and data insertion.  

### Frontend Features  
1. Dashboard:  
   - Search/filter transactions by type, date, or amount.  
   - Charts:  
     - Pie chart for transaction type distribution.  
     - Bar chart for monthly summaries.  
2. Details View:  
   - Clickable transactions to show metadata (sender, amount, timestamp).  

---

## 4. Getting Started  
### Prerequisites  
- Python 3.8+  
- Node.js (optional for frontend bundling).  
- Database: SQLite (default) or PostgreSQL.  

### Setup  
1. Clone Repository:  
   ```bash  
   git clone [your-repo-link]  
   ```  
2. Install Dependencies:  
   ```bash  
   pip install -r requirements.txt  # Python libraries (e.g., Flask, pandas)  
   ```  
3. Run Data Processor:  
   ```bash  
   python process_sms.py --input sms_data.xml --db momo_transactions.db  
   ```  
4. Start Frontend:  
   - Open `index.html` in a browser or deploy via a web server.  

---

## 5. User Guide  
### 5.1 Accessing the Dashboard 
1. Navigate to `http://localhost:3000` (if using Flask) or open `index.html` directly.  
2. Use the sidebar to filter transactions by type or date range.  

### 5.2 Using Visualizations 
- Pie Chart: Hover to see percentages for each transaction type.  
- Bar Chart: Click bars to drill down into monthly data.  

### 5.3 Viewing Transaction Details 
- Click any transaction in the table to view sender, amount, and timestamp.  

---

## 6. Administration  
### Database Management
- Schema Migration: Use `schema.sql` to recreate tables.  
- User Roles: Not implemented (basic admin access via direct DB management).  

### Logs
- Unprocessed SMS messages are logged in `error_logs.txt`.  

---

## 7. Maintenance 
### Backups
- Daily backups of the database:  
  ```bash  
  cp momo_transactions.db momo_backup_$(date +%F).db  
  ```  
### Updates
- Pull latest code from Git and rerun data processor if schema changes.  

---

## 8. Troubleshooting
| Issue | Solution |  
|-----------|--------------|  
| Data not loading | Check database connection in `config.py`. |  
| Charts not rendering | Ensure JavaScript is enabled in the browser. |  
| Duplicate transactions | Run deduplication script `remove_duplicates.py`. |  

---

## 9. Contact Information  
- Developer: [Your Name]  
- Email: [Your Email]  
- GitHub: [Repository Link]  

---

## 10. Appendix  
### Database Schema 
 Tables:  
1. `transactions`:  
   - `id` (PK), `type_id` (FK), `amount`, `sender`, `receiver`, `timestamp`.  
2. `transaction_types`:  
   - `type_id` (PK), `name` (e.g., "Incoming Money").  
3. `error_logs`:  
   - `log_id`, `raw_message`, `error_description`.  

### Dependencies
- Python: `Flask`, `pandas`, `lxml`.  
- Frontend: `Chart.js`, `Bootstrap`.  

### ER Diagram  
```plaintext
[Transactions] ↔–– [Transaction Types]  
   ↑  
[Error Logs]  
```

---


