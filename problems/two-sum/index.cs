public class Program
{
    public static int[] Main(int[] nums, int target)
    {
        int firstIndex = 0,
       secondIndex = 0;

        for (int i = 0; i < nums.Length; i++)
        {
            firstIndex = i;

            for (int j = 0; j < nums.Length; j++)
            {
                // if the both indexes are same then continue.
                if (i == j) continue;

                if (nums[i] + nums[j] == target)
                {
                    secondIndex = j;
                    break; // break;
                }
            }

            if (secondIndex > 0) break;
        }

        return new int[] { firstIndex, secondIndex };
    }
}