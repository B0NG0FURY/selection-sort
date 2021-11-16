def selection_sort(arr)
  result = []

  while arr.length > 0
    min = arr.min
    i = arr.index(arr.min)
    result.push(min)

    arr.delete_at(i)
  end
  result
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts ""

  puts "Expecting: [-6, 2, 7, 11]"
  print "=> "
  print selection_sort([7, 2, 11, -6])

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }

  start_time = Time.now

  1000.times do
    selection_sort([4, 2])
    selection_sort(long_input)
  end

  avg_time = (Time.now - start_time) / 2000
  puts avg_time
end

# Please add your pseudocode to this file
# And a written explanation of your solution
