<?php

namespace App\Http\Controllers;

use App\Models\Publication; 
use App\Actions\Publication\CreatePublicationAction; 
use App\Actions\Publication\UpdatePublicationAction; 
use App\Http\Requests\PublicationStoreRequest; 
use App\Http\Requests\PublicationUpdateRequest; 
use Illumianet\Support\Facades\Session; 
use Illuminate\Http\Request;
use Inertia\Inertia; 

class PublicationController extends Controller
{
    /**
     * Index 
     *
     * @return Inertia
     */
    public function index()
    {
        return Inertia::render('Publication/Index', [
            'publications' => Publication::orderBy('id', 'DESC')->get(), 
        ]); 
    }

    /**
     * Create
     *
     * @return Inertia
     */
    public function create()
    {
        return Inertia::render('Publication/Create'); 
    }

    /**
     * Edit 
     *
     * @param Publication $publication
     * 
     * @return Inertia
     */
    public function edit(Publication $publication)
    {
        return Inertia::render('Publication/Edit', [
            'publication' => $publication, 
        ]); 
    }

    /**
     * Store 
     *
     * @param PublicationStoreRequest $request
     * @param CreatePublicationAction $action
     * 
     * @return Inertia
     */
    public function store(PublicationStoreRequest $request, CreatePublicationAction $action)
    {
        $publication = $action->create($request->validated()); 

        return redirect()
            ->route('publication.index')
            ->with([
                'message' => 'Berhasil menambahkan publikasi baru'
            ]);
    }

    /**
     * Update 
     *
     * @param Publication $publication
     * @param PublicationUpdateRequest $request
     * @param UpdatePublicationAction $action
     * 
     * @return void
     */
    public function update(
        Publication $publication, 
        PublicationUpdateRequest $request, 
        UpdatePublicationAction $action)
    {
        $publication = $action->update($publication, $request->validated()); 

        return redirect()
            ->route('publication.index')
            ->with([
                'message' => 'Berhasil mengubah publikasi baru'
            ]);
    }

    /**
     * Delete 
     *
     * @param Publication $publication
     */
    public function delete(Publication $publication)
    {
        $publication->delete(); 

        return redirect()
            ->route('publication.index')
            ->with([
                'message' => 'Berhasil menghapus publikasi baru'
            ]);
    }
}
