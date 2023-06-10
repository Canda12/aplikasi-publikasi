<?php

namespace App\Exports;

use App\Models\Publication;
use Maatwebsite\Excel\Concerns\FromCollection;

class PublicationExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Publication::all();
    }
}
