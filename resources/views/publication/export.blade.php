<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF</title>
    <style>
        body {
            font-family: Arial, helvetica; 
            font-size: 14px; 
        }

        .table {
            width: 100%; 
            border-collapse: collapse;
        }

        .table tr th, 
        .table tr td {
            border: solid 1px #DDD; 
            padding: 5px;
        }
    </style>
</head>
<body>
    <h1>Data Publikasi</h1>
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Nama Peneliti</th>
                <th>Tanggal Publikasi</th>
                <th>Deskripsi</th>
            </tr>
        </thead>
        <tbody>
            @php 
            $no = 1; 
            @endphp 
            @foreach ($publications as $publication)
                <tr>
                    <td>{{ $no++ }}</td>
                    <td>{{ $publication->title }}</td>
                    <td>{{ $publication->author }}</td>
                    <td>{{ $publication->publish_date }}</td>
                    <td>{{ $publication->description }}</td>
                </tr>
            @endforeach 
        </tbody>
    </table>
</body>
</html>