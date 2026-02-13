import { products } from "@/constants/product"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/main/header"
import Link from "next/link"

export default function ProductPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <p className="text-lg text-gray-700">
        Explore our wide range of products designed to meet your needs.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img
              src={product.imageUrl}
              alt={product.description}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <p className={`mt-1 font-medium ${product.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
              {product.availability}
              <Link href={`/products/${product.slug}`} className="ml-2">
                <Button variant="outline" className="mt-4 cursor-pointer flex items-center gap-2">
                  View Details
                </Button>
              </Link>
            </p>
          </div>
        ))}
      </div>
      {/* Add more product details and components here */}
    </div>
  )
}