-- 1. Insert sample destinations into public.destinations
truncate table public.destinations cascade;
insert into public.destinations (name, country, img, price) values
('Bali', 'Indonesia', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', '₹54,999'),
('Maldives', 'South Asia', 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', '₹78,500'),
('Dubai', 'UAE', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', '₹42,000'),
('Switzerland', 'Europe', 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', '₹1,24,000'),
('Kashmir', 'India', 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80', '₹28,500'),
('Thailand', 'South East Asia', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', '₹36,999'),
('Singapore', 'South East Asia', 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80', '₹58,000'),
('Kerala', 'India', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', '₹22,999');


-- 2. Insert sample packages into public.packages
truncate table public.packages cascade;
insert into public.packages (title, nights, img, price, tag, incl) values
('Bali Honeymoon Escape', '6N / 7D', 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=80', '₹64,999', 'Honeymoon', array['Hotel', 'Flights', 'Villa', 'Spa']),
('Royal Rajasthan Heritage', '5N / 6D', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80', '₹32,500', 'Cultural', array['Palace Stay', 'Guide', 'Meals']),
('Maldives Water Villa', '4N / 5D', 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80', '₹89,000', 'Luxury', array['Overwater Villa', 'All Meals', 'Transfers']),
('Dubai City + Desert', '5N / 6D', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80', '₹48,750', 'Family', array['Burj Khalifa', 'Safari', 'Cruise']),
('Swiss Alps Adventure', '7N / 8D', 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=900&q=80', '₹1,34,500', 'Adventure', array['Jungfraujoch', 'Glacier 3000']),
('Thailand Beach Combo', '6N / 7D', 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=900&q=80', '₹41,200', 'Beach', array['Phuket', 'Krabi', 'Ferries']),
('Vietnam Explorer Tour', '5N / 6D', 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80', '₹38,500', 'Adventure', array['Hanoi', 'Halong Bay', 'Flights', 'Hotels']),
('Almaty Scenic Getaway', '4N / 5D', 'https://images.unsplash.com/photo-1589553416260-170fb99e2b41?w=900&q=80', '₹42,000', 'Scenic', array['Charyn Canyon', 'Medeu', 'Flights', 'Meals']),
('Nepal & Everest Panorama', '5N / 6D', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80', '₹29,999', 'Trekking', array['Kathmandu', 'Pokhara', 'Temples', 'Guide']);
