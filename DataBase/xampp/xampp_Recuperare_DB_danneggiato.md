## Recuperare DB Danneggiato su XAMPP:
- Rename folder `mysql/data` to `mysql/data_old`
- Make a copy of `mysql/backup` folder and name it as `mysql/data`
- Copy all your database folders from `mysql/data_old` into `mysql/data` (_except mysql, performance_schema, and phpmyadmin folders_)
- Copy `mysql/data_old/ibdata1` file into `mysql/data` folder
- Start MySQL from XAMPP control panel

---
- `select ingnore` per non re-inserire parametri già immessi