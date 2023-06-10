import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, publications }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Publikasi
                </h2>
            }
        >
            <Head title="Publikasi" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5 px-3">
                        <div className="mb-3 border-b pb-3">
                            <Link
                                href={route("publication.create")}
                                className="btn py-2 px-3 text-sm bg-cyan-600 text-white rounded-lg"
                            >
                                Tambah Publikasi
                            </Link>
                            {' '}
                            <a
                                href={route("publication.export")}
                                target="_blank"
                                className="btn py-2 px-3 text-sm bg-green-600 text-white rounded-lg"
                            >
                                Export ke Excel
                            </a>
                            {' '}
                            <a
                                href={route("publication.pdf")}
                                target="_blank"
                                className="btn py-2 px-3 text-sm bg-red-600 text-white rounded-lg"
                            >
                                Export ke PDF
                            </a>
                        </div>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-800 dark:text-gray-800">
                                <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-200 dark:text-gray-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Judul Publikasi
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Pengarang
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tanggal Publish
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center"
                                        >
                                            Tindakan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {publications.map((publication) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-50 dark:border-gray-200"
                                            key={publication.id}
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {publication.title}
                                            </th>
                                            <td className="px-6 py-4">
                                                {publication.author}
                                            </td>
                                            <td className="px-6 py-4">
                                                {publication.publish_date}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <Link
                                                    href={route(
                                                        "publication.edit",
                                                        {
                                                            publication:
                                                                publication.id,
                                                        }
                                                    )}
                                                    className="p-2 bg-green-200 text-green-950 text-xs rounded"
                                                >
                                                    Edit
                                                </Link>{" "}
                                                <button
                                                    onClick={() => {
                                                        router.delete(
                                                            route(
                                                                "publication.delete",
                                                                {
                                                                    publication:
                                                                        publication.id,
                                                                }
                                                            )
                                                        );
                                                    }}
                                                    className="p-2 bg-red-200 text-red-950 text-xs rounded"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
