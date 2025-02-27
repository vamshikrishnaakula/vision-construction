
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    image: string;
    level: string;
  };
  image: string;
}

export const ServiceCard = ({ title, description, price, rating, reviews, seller, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={seller.image} />
            <AvatarFallback>{seller.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{seller.name}</p>
            <p className="text-xs text-gray-500">{seller.level}</p>
          </div>
        </div>
        <h3 className="font-medium mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center gap-1 text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs text-gray-500">Starting at</span>
          <span className="text-lg font-bold">${price}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
